Midíadía Widgets
=========

With this small set of jQuery plugin sets, you can add a nutritional values label, carbohydrates servings and energy information (kilocalories and  percentage for each product’s macronutrient) in your site using Midíadía's API result.

Requirements
=========

jQuery 1.6+ is required for the widget.

Installation of Nutritional Label
=========

To use the widget in your page between `<head></head>` tag put the CSS file.

    <link rel="stylesheet" href="//api.midiadia.com/nutrilabel/nutrilabel.css">

Then, preferably just before `</body>` close tag, put the javascript file 

    <script src="//api.midiadia.com/nutrilabel/nutrilabel.js"></script>

Now you are ready to feed the widget and fire it.

Now add a blank element wherever you want to put the widget on your page.

    <div id="divNutriLabel" class="nutrilabeldemo">
            </div> 
            
Then enable the widget on this element with the given data:

    $('#divNutriLabel').nutritionLabel({
	   'nutriLabelData': $.parseJSON(nutriLabelDataStr),
    });

The widget is ready to use.

Installation of Energy Value
=========

To use the widget in your page between `<head></head>` tag put the CSS file.

    <link rel="stylesheet" href="//api.midiadia.com/nutrilabel/kpi.css">

Then, preferably just before `</body>` close tag, put the javascript file 

    <script src="//api.midiadia.com/nutrilabel/kpi.js"></script>

Now you are ready to feed the widget and fire it. This script includes two different widgets: Product's energy values and percentage for each macronutrient.

Now add a blank element wherever you want to put the widget on your page.

    <!-- For energy value based on a daily diet -->
     <div class="kpi" data-cal="589"
                     data-carbonhidratos="48"
                     data-grasa="43"
                     data-proteina="8">
                </div>
         
    <!-- For percentages for each macronutrient -->
    <div class="kpi-calories" 
                     data-carbonhidratos='48'
                     data-grasa='43'
                     data-proteina='8'>
    </div>
       
Then enable the widget on this element with the given data:

     $('.kpi').kpiIdr(); //For energy value based on a daily diet
     $('.kpi-calories').kpiCalories(); //For percentages for each macronutrient
                   
The widget is ready to use.

Installation of Carbonhydrates Serving
=========

To use the widget in your page between `<head></head>` tag put the CSS file.

    <link rel="stylesheet" href="//api.midiadia.com/nutrilabel/carbon.css">

Then, preferably just before `</body>` close tag, put the javascript file 

    <script src="//api.midiadia.com/nutrilabel/carbon.js"></script>

Now you are ready to feed the widget and fire it.

Just put the JSON response that returns the Midíadía API into a variable:

      var carbonDataStr = 'JSON_CONTENT'; //see nutrilabel.html for an example of JSON output.

Now add a blank element wherever you want to put the widget on your page.

    <div class="kpi-carbonhidrats" data-value='5.9'>
    </div>

            
Then enable the widget on this element with the given data:

   
    $('.kpi-carbonhidrats').carbon();
                   
The widget is ready to use.

Example
=========
For the usage see nutrilabel.html (for nutritional label), kpi.html (for energy information) and carbon.html (for carbonhydrates serving information) file in the repository.

Also please see http://www.midiadia.com/productos/barritas-cereales-y-chocolate-blanco-sacialis-bicentury-5487 for examples on a live web site.

Notes
=========

 1. https://api.midiadia.com/nutrilabel/ is our CDN that's updated periodically. To use the latest version of the widget, always use this CDN.
 
 2. A SASS file is provided with the repository. But if you want to customize the appearance always **override** the current CSS, not **change** to be able to use the widget without any problems after any update.

Help
=========
For any problems about the widget, open an issue at Github.
