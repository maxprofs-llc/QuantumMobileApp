//var NavigationBase = require("./shared/models/NavigationBase");

//var MainPage = function () { };
//MainPage.prototype = new NavigationBase();

//module.exports = new MainPage();


var Observable = require("data/observable").Observable;
var observableArrayModule = require("data/observable-array");

var frames = require("ui/frame");
var view = require("ui/core/view");

var All = "All";
var Design = "Design";
var Marketing = "Marketing";
var Dev = "Development";

function createViewModel() {
    var viewModel = new Observable();

    // var array = [];
    
    // array.push(new Observable( { categoryUrl: "~/images/DesignCategory.png" } ));
    // array.push(new Observable( { categoryUrl: "~/images/MarketingCategory.png" } ));
    // array.push(new Observable( { categoryUrl: "~/images/DevelopmentCategory.png" } ));

    // var categoryDataSource = new observableArrayModule.ObservableArray(array);

    // viewModel.set("categoryDataSource", categoryDataSource);    

    return viewModel;
}

exports.createViewModel = createViewModel;