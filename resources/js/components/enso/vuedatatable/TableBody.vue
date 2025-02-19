<template>

<tbody>
    <tr v-for="(row, index) in body.data"
        :key="index">
        <td :class="template.align"
            v-if="template.selectable && !isChild(row)">
            <div class="selectable">
                <label class="checkbox">
                    <input type="checkbox"
                        :value="row.dtRowId"
                        v-model="$parent.selected"
                        @change="updateSelected">
                </label>
            </div>
        </td>
        <td :class="template.align"
            v-if="template.crtNo && !isChild(row)">
            <div class="crt-no">
                <span class="crt-no-label">
                    {{ getIndex(row) }}
                </span>
                <span class="hidden-controls"
                    v-if="hiddenCount"
                    @click="toggleExpand(row, index)">
                    <span class="icon is-small">
                        <fa :icon="isExpanded(row) ? 'minus-square' : 'plus-square'"/>
                    </span>
                </span>
            </div>
        </td>
        <td :class="[
                column.class,
                { 'is-money' : column.money },
                column.align
                    ? template.aligns[column.align]
                    : template.align
            ]"
            v-for="(column, idx) in template.columns"
            :key="idx"
            v-if="
                column.meta.visible && !column.meta.hidden
                && !column.meta.rogue && !isChild(row)
            ">
            <table-cell :i18n="i18n"
                :hidden-controls="cascadesHiddenControls && idx === 0"
                :column="column"
                :value="row[column.name]"
                @clicked="clicked(row, column)"
                @updateCell="updateCell(row,column, ...arguments)"
                >
                <span slot="hidden-controls"
                    class="hidden-controls"
                    v-if="cascadesHiddenControls && idx === 0"
                    @click="toggleExpand(row, index)">
                    <span class="icon is-small">
                        <fa :icon="isExpanded(row) ? 'minus-square' : 'plus-square'"/>
                    </span>
                </span>
                <span :slot="column.name"
                    v-if="column.meta.slot">
                    <slot :name="column.name"
                        :row="row"
                        :column="column"/>
                </span>
            </table-cell>
        </td>
        <td class="table-actions"
            :class="template.align"
            v-if="template.actions && !isChild(row)">
            <span class="table-action-buttons">
              <template v-for="(button, index) in template.buttons.row">
                <confirm-button v-if="button.event == 'destroy'" @confirmation-success="doAction(button, row)"></confirm-button>
                <el-tooltip v-else class="item" effect="dark" :content="button.label" placement="top-start">
                  <a
                    :key="index"
                    class=""
                    :class="button.class"
                    :href="button.action === 'href' ? getPath(button, row.dtRowId) : null"
                    @click="button.confirmation ? showModal(button, row) : doAction(button, row)">
                    <span class="">
                      <i :class="button.icon"></i>
                      <!-- <fa :icon="button.icon"/> -->
                    </span>
                  </a>
                </el-tooltip>
              </template>
            </span>
        </td>
        <td :colspan="hiddenColSpan"
            :class="template.align"
            v-if="isChild(row)">
            <ul>
                <li class="child-row"
                    v-for="(item, index) in row"
                    :key="index"
                    v-if="!item.column.meta.rogue">
                    <b>{{ i18n(item.column.label) }}</b>:
                    <table-cell :i18n="i18n"
                        :column="item.column"
                        :value="item.value"
                        @clicked="clicked(body.data[item.index], item.column)">
                        <span :slot="item.column.name"
                            v-if="item.column.meta.slot">
                            <slot :name="item.column.name"
                                :row="body.data[item.rowIndex]"
                                :column="item.column"/>
                        </span>
                    </table-cell>
                </li>
            </ul>
        </td>
    </tr>
    <modal v-if="modal"
        :show="modal"
        :i18n="i18n"
        :message="button.message"
        @close="closeModal()"
        @commit="doAction(button, row)"/>
</tbody>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMinusSquare, faPlusSquare, faEye, faPencilAlt, faTrashAlt, faCloudDownloadAlt }
    from '@fortawesome/free-solid-svg-icons';
import TableCell from './TableCell.vue';
import Modal from './Modal.vue';
import ConfirmButton from '@/components/Buttons/ConfirmButton.vue'

library.add([
    faMinusSquare, faPlusSquare, faEye, faPencilAlt, faTrashAlt, faCloudDownloadAlt,
]);

export default {
    name: 'TableBody',

    components: { TableCell, Modal, ConfirmButton },

    props: {
        template: {
            type: Object,
            required: true,
        },
        body: {
            type: Object,
            required: true,
        },
        i18n: {
            type: Function,
            required: true,
        },
        start: {
            type: Number,
            required: true,
        },
        expanded: {
            type: Array,
            required: true,
        },
        selected: {
            type: Array,
            required: true,
        },
    },

    data() {
        return {
            modal: false,
            row: null,
            button: null,
        };
    },

    computed: {
        hiddenColumns() {
            return this.template.columns
                .filter(column => column.meta.hidden && column.meta.visible);
        },
        hiddenCount() {
            return this.hiddenColumns.length;
        },
        hiddenColSpan() {
            return this.template.columns.length
                    - this.hiddenColumns.length
                    + (this.template.actions ? 2 : 1);
        },
        cascadesHiddenControls() {
            return !this.template.crtNo && this.hiddenCount > 0;
        },
    },

    watch: {
        hiddenCount: {
            handler(newVal) {
                if (!newVal) {
                    this.removeChilds();
                    return;
                }

                this.refreshExpanded();
            },
        },
    },

    methods: {
        getPath(button, dtRowId) {
            return button.path.replace('dtRowId', dtRowId);
        },
        showModal(button, row) {
            this.row = row;
            this.button = button;
            this.modal = true;
        },
        closeModal() {
            this.modal = false;
            this.row = null;
            this.button = null;
        },
        doAction(button, row) {
            if (this.modal) {
                this.closeModal();
            }

            if (button.event) {
                this.$emit(button.event, row);
            }

            if (button.action === 'ajax') {
                this.$emit('ajax', button.method, this.getPath(button, row.dtRowId), button.postEvent);
                return;
            }

            if (button.action === 'router') {
                this.$router.push({ name: button.route, params: this.getRouteParams(button, row) });
            }
        },
        getRouteParams(button, row) {
            const params = {
                id: row.dtRowId,
            };

            if (button.params) {
                return Object.assign(params, button.params);
            }

            return params;
        },

        getIndex(row) {
            return this.body.data.filter(r => !this.isChild(r))
                .findIndex(r => r.dtRowId === row.dtRowId) + this.start + 1;
        },
        isExpanded(row) {
            return this.expanded.includes(row.dtRowId);
        },
        isChild(row) {
            return Array.isArray(row);
        },
        toggleExpand(row, index) {
            if (!this.isExpanded(row)) {
                this.expanded.push(row.dtRowId);
                this.addChildRow(row, index);
                return;
            }

            const idx = this.expanded.findIndex(id => id === row.dtRowId);
            this.expanded.splice(idx, 1);
            this.body.data.splice(index + 1, 1);
        },
        addChildRow(row, index) {
            const newRow = this.hiddenColumns.reduce((collector, column) => {
                collector.push({ column, value: row[column.name], rowIndex: index });
                return collector;
            }, []);

            this.body.data.splice(index + 1, 0, newRow);
        },
        refreshExpanded() {
            this.body.data.forEach((row, index) => {
                this.toggleExpand(row, index);
                this.toggleExpand(row, index);
            });
        },
        removeChilds() {
            this.body.data.reduce((indexes, row, index) => {
                if (this.isChild(row)) {
                    indexes.push(index);
                }

                return indexes;
            }, []).sort((a, b) => a < b)
                .forEach(index => this.body.data.splice(index, 1));
            this.expanded.splice(0);
        },
        clicked(row, column) {
            if (column.meta.clickable) {
                this.$emit('clicked', { column, row });
            }
        },
        updateCell(row,column, data) {
            // if (column.meta.clickable) {
                this.$emit('updateCell', { row,column, data });
            // }
        },
        selectPage(status) {
            this.body.data.forEach((row) => {
                if (!this.isChild(row)) {
                    const index = this.selected.findIndex(id => id === row.dtRowId);

                    if (status && index === -1) {
                        this.selected.push(row.dtRowId);
                        return;
                    }

                    if (!status) {
                        this.selected.splice(index, 1);
                    }
                }
            });

            this.updateSelected();
        },
        updateSelected() {
            this.$emit('update-selected', this.selected);
        },
    },
};

</script>

<style lang="scss" scoped>

    .crt-no {
        white-space:nowrap;
        display: flex;

        .crt-no-label {
            margin: auto;
        }
    }

    .hidden-controls {
        cursor: pointer;
        margin-left: auto;
        margin-top: 0.1em;
    }

    td.table-actions {
        padding: .35em .5em;

        span.table-action-buttons {
            display: inline-flex;
        }

        .button.is-small {
            &.is-table-button {
                height: 1.6em;
                width: 1.6em;
                font-size: .9em;
            }

            &.is-row-button {
                background: 0;
                border: none;
                opacity: 0.6;
                transition: opacity ease 0.3s;

                &:focus {
                    box-shadow: unset;
                }

                &:hover {
                    opacity: 1;
                }
            }
        }
    }

    li.child-row:not(:last-child) {
        border-bottom: 1px solid #efefef;
    }

    li.child-row {
        padding: 0.5em 0;
    }

    .is-money {
        white-space: pre;
        font-family: monospace;
    }

</style>
