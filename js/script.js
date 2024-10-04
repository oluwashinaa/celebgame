$(document).ready(function () {
    $("#match").click(function () {


        const questions = $("input:radio[name='questions']:checked").val();
        const food = $("input:radio[name='food']:checked").val();
        const hair = $("input:radio[name='hair']:checked").val();
        const music = $("input:radio[name='music']:checked").val();
        const color = $("input:radio[name='color']:checked").val();
        const movie = $("input:radio[name='movie']:checked").val();


        if (!questions || !food || !hair || !music || !color || !movie) {
            alert("Please select an option for all categories.");
            return;
        }



        // if (questions === "black" && food === "garri" && hair === "multi" && music === "trench" && color === "black" && movie === "horror") {
        //     $("#head").slideUp();
        //     $("#results1").show();
        //     $("#results2").hide();
        //     $("#results3").hide();
        //     $("#results4").hide();
        //     $("#results5").hide();
        //     $("#results6").hide();
        //     $("#results7").hide();
        // }


      else if  (questions === "green" && food === "pizza" && hair === "brown" && music === "afro" && color === "yellow" && movie === "romance") {
            $("#head").slideUp();
            $("#results1").hide();
            $("#results2").show();
            $("#results3").hide();
            $("#results4").hide();
            $("#results5").hide();
            $("#results6").hide();
            $("#results7").hide();
        

        }
        
        else if (questions === "grey" && food === "rice" && hair === "black" && music === "hip" && color === "blue" && movie === "mystrey") {
            $("#head").slideUp();
            $("#results1").hide();
            $("#results2").hide();
            $("#results3").show();
            $("#results4").hide();
            $("#results5").hide();
            $("#results6").hide();
            $("#results7").hide();
          

        }

        else if (questions === "brown" && food === "pizza" && hair === "grey" && music === "afro" && color === "blue" && movie === "adven") {
            $("#head").slideUp();
            $("#results1").hide();
            $("#results2").hide();
            $("#results3").hide();
            $("#results4").show();
            $("#results5").hide();
            $("#results6").hide();
            $("#results7").hide();

        }

        else if (questions === "black" && food === "garri" && hair === "brown" && music === "trench" && color === "yellow" && movie ==="romance") {
            $("#head").slideUp();
            $("#results1").show();
            $("#results2").hide();
            $("#results3").hide();
            $("#results4").hide();
            $("#results5").hide();
            $("#results6").hide();
            $("#results7").hide();
        

        }

        else if (questions === "brown" && food === "amala" && hair === "brown" && music === "beat" && color === "green" && movie ==="horror") {

            $("#head").slideUp();
            $("#results1").hide();
            $("#results2").hide();
            $("#results3").hide();
            $("#results4").hide();
            $("#results5").show();
            $("#results6").hide();
            $("#results7").hide();

        

        }


        else if (questions === "grey" && food === "pizza" && hair === "multi" && music === "hip" && color === "yellow" && movie ==="adven") {
console.log("showing");

            $("#head").slideUp();
            $("#results1").hide();
            $("#results2").hide();
            $("#results3").hide();
            $("#results4").hide();
            $("#results5").hide();
            $("#results6").show();
            $("#results7").hide();
        

        }

        else if (questions === "green" && food === "rice" && hair === "black" && music === "afro" && color === "blue" && movie ==="romance") {

            $("#head").slideUp();
            $("#results1").hide();
            $("#results2").hide();
            $("#results3").hide();
            $("#results4").hide();
            $("#results5").hide();
            $("#results6").hide();
            $("#results7").show();
        }

        else if (questions === "black" && food === "amala" && hair === "grey" && music === "hip" && color === "yellow" && movie ==="adven") {

            $("#head").slideUp();
            $("#results1").hide();
            $("#results2").hide();
            $("#results3").show();
            $("#results4").hide();
            $("#results5").hide();
            $("#results6").hide();
            $("#results7").hide();
        }

        else if (questions === "green" && food === "pizza" && hair === "grey" && music === "hip" && color === "black" && movie ==="adven") {

            $("#head").slideUp();
            $("#results1").hide();
            $("#results2").show();
            $("#results3").hide();
            $("#results4").hide();
            $("#results5").hide();
            $("#results6").hide();
            $("#results7").hide();
        }



        else {
            $("#results1").show();
            $("#results1").text("Sorry, your selections did not match any character.");
        }
    });
});
