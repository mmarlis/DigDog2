$(document).ready(function(){


    let NUM = 3;
    let i = 0;
    let j = 0;


    for(let i = 0; i < NUM ; i++)
    {
        for(let j = 0; j < NUM; j++)
        {

            let newSpan =  $("<span>");
            $("#board").append(newSpan);
        }

        $("#board").append("<br>");


    }
    //when card is flipped

    $("span").on("click", flipCard) //all spans run flipCard when clicked


    const NUM_BONES = 3;
    let bonesHidden = 0;
    let bonesFound = 0;
    let dirtSpot = 0;


    while (bonesHidden < NUM_BONES)
    {
        bonesHidden++
        let randnum = Math.floor(Math.random() * NUM_BONES ** 2)

        //eq = the element that matches the index number
        $("span").eq(randnum).addClass("bone");
    }


    //every time a card is flipped
    function flipCard() {
        // $("div#board").click()


        if ($(this).hasClass("bone"))
        {
            $(this).addClass("foundBone")
            bonesFound++

        }
        if($(this).addClass("dirt"))

        {
          dirtSpot++
        }
        if(bonesFound===NUM_BONES)
        {
            $("span").off("click");
            // console.write("That wasn't too ruff!")
        }

    }

// changing progressbar when button is clicked

    $("span").click(function () {
        animateProgress(NUM_BONES * 5 / 100 * 100)
    });

    function animateProgress(diff) {

        let currValue = $("#progress").val();
        let toValue = currValue + diff;

        //toValue = the value of the progress bar
        if (toValue >= 100)
        {
            //makes the buttons (spans) not clickable when progress bar reaches 100%
            $("span").off("click");


        }


        $("#progress").val(Math.round(toValue));

    }



});


