WebViewer({
      path: 'WebViewer/lib', // path to the PDFTron 'lib' folder on your server
      licenseKey: 'Insert commercial license key here after purchase',
      initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf',
      // initialDoc: '/path/to/my/file.pdf',  // You can also use documents on your server
    }, document.getElementById('viewer'))
    .then(instance => {
      const docViewer = instance.docViewer;
      const annotManager = instance.annotManager;
      // call methods from instance, docViewer and annotManager as needed
  
      // you can also access major namespaces from the instance as follows:
      // const Tools = instance.Tools;
      // const Annotations = instance.Annotations;
  
      docViewer.on('documentLoaded', () => {
        // call methods relating to the loaded document
      });
    });
