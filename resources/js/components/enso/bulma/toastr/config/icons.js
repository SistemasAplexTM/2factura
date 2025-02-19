import { library } from '@fortawesome/fontawesome-svg-core';
import { faComment, faInfoCircle, faCheckCircle, faExclamationCircle, faTimesCircle }
    from '@fortawesome/fontawesome-free-solid';

library.add([
    faComment, faInfoCircle, faCheckCircle, faExclamationCircle, faTimesCircle,
]);

export default {
    message: faComment,
    primary: faComment,
    info: faInfoCircle,
    success: faCheckCircle,
    warning: faExclamationCircle,
    danger: faTimesCircle,
};
