


function init(){
    // Sentry.init({
    //     dsn: "https://65f0c289d9d14544a1e2849d9c1c8538@o1094428.ingest.sentry.io/6113471",
    //     integrations: [new Integrations.BrowserTracing()],
      
    //     // Set tracesSampleRate to 1.0 to capture 100%
    //     // of transactions for performance monitoring.
    //     // We recommend adjusting this value in production
    //     tracesSampleRate: 1.0,
    //   });
}
function log(error){
    // Sentry.captureException(error);
    console.error(error);
}

export default {
    init,
    log
};