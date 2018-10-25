<?php

namespace App\Http\Controllers;

use App\AplexProduct;
use Illuminate\Http\Request;
use LaravelEnso\VueDatatable\app\Traits\Datatable;
use App\Http\Controllers\Tables\Builders\ProductTable;

//Includes WebClientPrint classes
include_once(app_path() . '\WebClientPrint\WebClientPrint.php');
use Neodynamic\SDK\Web\WebClientPrint;
use Neodynamic\SDK\Web\ClientPrintJob;
use Neodynamic\SDK\Web\DefaultPrinter;
use Neodynamic\SDK\Web\InstalledPrinter;
use Neodynamic\SDK\Web\PrintFile;
use Neodynamic\SDK\Web\PrintFilePDF;
use Neodynamic\SDK\Web\PrintRotation;
use Session;

use Barryvdh\DomPDF\Facade as PDF;

class AplexProductController extends Controller
{
    use Datatable;
    protected $tableClass = ProductTable::class;

    public function urlPrint(){
        return WebClientPrint::createScript(action('WebClientPrintController@processRequest'), action('AplexProductController@print'), Session::getId());
    }

    public function print(Request $request){
     if ($request->exists(WebClientPrint::CLIENT_PRINT_JOB)) {

        $useDefaultPrinter = ($request->input('useDefaultPrinter') === 'checked');
        $printerName = urldecode($request->input('printerName'));

        $filePath = public_path() . '/'. $request->input('fileName');

        $fileName = 'print.pdf';

        $cpj = new ClientPrintJob();

        $cpj->printFile = new PrintFilePDF($filePath, $fileName, null);
        if ($useDefaultPrinter || $printerName === 'null'){
            $cpj->clientPrinter = new DefaultPrinter();
        }else{
            $cpj->clientPrinter = new InstalledPrinter($printerName);
        }

        return response($cpj->sendToClient())
                      ->header('Content-Type', 'application/octet-stream');
      }
    }

    public function createFile(Request $request){
      $content = $request->content;
      $params = array(
        'code', 'name', 'price_sale'
      );
      $data = $this->show($request->id);
      $html = $this->replacements($params, $data);
      $html = preg_replace(array_keys($html), array_values($html), $content);
      $pdf = \App::make('dompdf.wrapper');
      $pdf->loadHTML($html);
      $name = "print.pdf";
      $pdf->save($name);
      $output = $pdf->output();
      file_put_contents( $name, $output);
      return response($name)->header('Content-Type', 'text/plain');
    }

    public function replacements($params, $data)
    {
        foreach ($params as $key => $value) {
            $replacements['({'. $value .'})'] = ($data) ? $data[$value] : '';
        }
        return $replacements;
    }

    // /**
    //  * Display a listing of the resource.
    //  *
    //  * @return \Illuminate\Http\Response
    //  */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        AplexProduct::create([
          'code' => $request->code,
          'name' => $request->name,
          'reference' => $request->ref,
          'price_sale' => $request->price_sale,
          'cost' => $request->cost,
          'status' => 'creado'
        ]);
        return array('code' => 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AplexProduct  $aplexProduct
     * @return \Illuminate\Http\Response
     */
    public function show($product)
    {
        return AplexProduct::find($product)->toArray();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AplexProduct  $aplexProduct
     * @return \Illuminate\Http\Response
     */
    public function edit(AplexProduct $aplexProduct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AplexProduct  $aplexProduct
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AplexProduct $aplexProduct)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AplexProduct  $aplexProduct
     * @return \Illuminate\Http\Response
     */
    public function destroy(AplexProduct $aplexProduct)
    {
        //
    }
}
