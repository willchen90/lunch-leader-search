if (Meteor.isClient) {
  //YelpQuery = function(search) {
  //  // Query OAUTH credentials (these are set manually)
  //  //var auth = Accounts.loginServiceConfiguration.findOne({service: 'yelp'});
  //
  //  // Add auth signature manually
  //  //auth['serviceProvider'] = { signatureMethod: "HMAC-SHA1" };
  //
  //  var auth = {
  //      consumerSecret: "nZw3_mkpUTs7hFWiLrxQAtE2dPo",
  //      tokenSecret: "sCTH-Pd0LMoaAkcyt5YdGwnaaAw",
  //      consumerKey: "2Vt-kngU-JGLCVuQBxi0pA"
  //    },
  //    parameters = {};
  //
  //  // Search term or categories query
  //  //if(isCategory)
  //  //  parameters.category_filter = search;
  //  //else
  //  parameters.term = search;
  //
  //  // Set lat, lon location, if available (SF is default location)
  //  parameters.location = 'San+Francisco';
  //
  //  // Results limited to 5
  //  parameters.limit = 5;
  //
  //  // Configure OAUTH parameters for REST call
  //  parameters.oauth_consumer_key = "2Vt-kngU-JGLCVuQBxi0pA";
  //  parameters.oauth_consumer_secret = "nZw3_mkpUTs7hFWiLrxQAtE2dPo";
  //  parameters.oauth_token = "II9m-6Isr91l2uApCZGPSv7UGmdX_jj0";
  //  parameters.oauth_signature_method = "HMAC-SHA1";
  //
  //  // Create OAUTH1 headers to make request to Yelp API
  //  var oauthBinding = new OAuth1Binding(auth.consumerKey, auth.consumerSecret, 'http://api.yelp.com/v2/search');
  //  oauthBinding.accessTokenSecret = "sCTH-Pd0LMoaAkcyt5YdGwnaaAw";
  //  var headers = oauthBinding._buildHeader();
  //
  //  // Return data results only
  //  var data = oauthBinding._call('GET', 'http://api.yelp.com/v2/search', headers, parameters).data;
  //  console.log("data", data);
  //  return data;
  //}
}

if (Meteor.isServer) {
  YelpQuery = function(search) {
    // Query OAUTH credentials (these are set manually)
    //var auth = Accounts.loginServiceConfiguration.findOne({service: 'yelp'});

    // Add auth signature manually
    //auth['serviceProvider'] = { signatureMethod: "HMAC-SHA1" };

    var auth = {
        consumerSecret: "hK9gvz41glWwSSGqyN3lviLKnwo", // "nZw3_mkpUTs7hFWiLrxQAtE2dPo",
        tokenSecret: "gdAqrZD0sVHR_yTu9Tlb2sxbyho", // "sCTH-Pd0LMoaAkcyt5YdGwnaaAw",
        consumerKey: "g2405YRES-FgILfUHV0GDg"// "2Vt-kngU-JGLCVuQBxi0pA"
      },
      parameters = {};

    // Search term or categories query
    //if(isCategory)
    //  parameters.category_filter = search;
    //else
    parameters.term = search;

    // Set lat, lon location, if available (SF is default location)
    parameters.location = 'San+Francisco';

    // Results limited to 5
    parameters.limit = 5;

    // Configure OAUTH parameters for REST call
    parameters.oauth_consumer_key = auth.consumerKey;
    parameters.oauth_consumer_secret = auth.consumerSecret;
    parameters.oauth_token = "J5iwfqtMxutjMMq6p6FiR_L4UzawJlPS";
    parameters.oauth_signature_method = "HMAC-SHA1";

    // Create OAUTH1 headers to make request to Yelp API
    var oauthBinding = new OAuth1Binding(auth.consumerKey, auth.consumerSecret, 'http://api.yelp.com/v2/search');
    oauthBinding.accessTokenSecret = auth.tokenSecret;
    var headers = oauthBinding._buildHeader();

    // Return data results only
    var data = oauthBinding._call('GET', 'http://api.yelp.com/v2/search', headers, parameters).data;
    console.log("data", data);
    return data;
  };
  YelpQuery("italian");
}
