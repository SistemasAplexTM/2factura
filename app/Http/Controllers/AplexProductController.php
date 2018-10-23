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

class AplexProductController extends Controller
{
    use Datatable;
    protected $tableClass = ProductTable::class;

   public function createFile(Request $request){
      $img = $request->base64ImageContent;
      $img = str_replace('data:application/pdf;base64,', '', $img);
      $img = str_replace(' ', '+', $img);
      $data = base64_decode($img);
      $randFileName = uniqid();
      // $name = $randFileName . '.jpg';
      $name = 'print.pdf';
      file_put_contents($name, $data);

      return response($name)->header('Content-Type', 'text/plain');

    }
   // public function createFile(Request $request){
   //    $img = $request->base64ImageContent;
   //    $img = str_replace('data:image/png;base64,', '', $img);
   //    $img = str_replace(' ', '+', $img);
   //    $data = base64_decode($img);
   //    $im = imagecreatefromstring($data);  //convertir a imagen
   //    $randFileName = uniqid();
   //    // $name = $randFileName . '.jpg';
   //    $name = 'prueba.jpg';
   //    if ($im !== false) {
   //        imagejpeg($im, $name); //guardar a disco
   //        imagedestroy($im); //liberar memoria
   //    }
   //    else {
   //        return 'Un error ocurrio al convertir la imagen.';
   //    }
   //   // return $request->all();
   //     //generate random file name
   //      // $randFileName = uniqid();
   //      // //save image file on root website folder
   //      // file_put_contents($randFileName, $request->input('base64ImageContent'));
   //      // //return file name back to client
   //      return response($name)->header('Content-Type', 'text/plain');
   //
   //  }

    public function urlPrint(){

        return WebClientPrint::createScript(action('WebClientPrintController@processRequest'), action('AplexProductController@print'), Session::getId());


        // return view('home.printHtmlCard', ['wcpScript' => $wcpScript]);
    }

    public function print(Request $request){
       if ($request->exists(WebClientPrint::CLIENT_PRINT_JOB)) {

            $useDefaultPrinter = ($request->input('useDefaultPrinter') === 'checked');
            $printerName = urldecode($request->input('printerName'));

            $filePath = public_path() . '/'. $request->input('fileName');

            //create a temp file name for our image file...

            //Because we know the Card size is 3.125in x 4.17in, we can specify
            //it through a special format in the file name (see http://goo.gl/upaazT) so the
            //printing output size is honored; otherwise the output will be sized to Page Width & Height
            //specified by the printer driver default setting
            // $fileName = uniqid().'-PW=3.125-PH=4.17'.'.jpg';
            $fileName = 'print.pdf';


            //Create a ClientPrintJob obj that will be processed at the client side by the WCPP
            $cpj = new ClientPrintJob();
            //Create a PrintFile object with the PNG file
            // $cpj->printFile = new PrintFile($filePath, $fileName, null);
            $cpj->printFile = new PrintFilePDF($filePath, $fileName, null);
            if ($useDefaultPrinter || $printerName === 'null'){
                $cpj->clientPrinter = new DefaultPrinter();
            }else{
                $cpj->clientPrinter = new InstalledPrinter($printerName);
            }

            //Send ClientPrintJob back to the client
            return response($cpj->sendToClient())
                        ->header('Content-Type', 'application/octet-stream');


        }
    }


    public function printFile(Request $request){

       if ($request->exists(WebClientPrint::CLIENT_PRINT_JOB)) {

            $fileName = uniqid();
            $filePath = public_path().'/files/GuidingPrinciplesBusinessHR_EN.pdf';

            //Create PrintFilePDF obj
            $myfile = new PrintFilePDF($filePath, $fileName, null);
            $myfile->printRotation = PrintRotation::parse($request->input('printRotation'));
            $myfile->pagesRange = $request->input('pagesRange');
            $myfile->printAnnotations = ($request->input('printAnnotations')=='true');
            $myfile->printAsGrayscale = ($request->input('printAsGrayscale')=='true');
            $myfile->printInReverseOrder = ($request->input('printInReverseOrder')=='true');

            //Create a ClientPrintJob obj that will be processed at the client side by the WCPP
            $cpj = new ClientPrintJob();
            $cpj->printFile = $myfile;

            //Create an InstalledPrinter obj
            $myPrinter = new InstalledPrinter(urldecode($request->input('printerName')));
            $myPrinter->trayName = $request->input('trayName');
            $myPrinter->paperName = $request->input('paperName');

            $cpj->clientPrinter = $myPrinter;

            //Send ClientPrintJob back to the client
            return response($cpj->sendToClient())
                        ->header('Content-Type', 'application/octet-stream');


        }
    }

    // /**
    //  * Display a listing of the resource.
    //  *
    //  * @return \Illuminate\Http\Response
    //  */
    // public function index()
    // {
    //     //
    // }

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
        return AplexProduct::find($product);
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
