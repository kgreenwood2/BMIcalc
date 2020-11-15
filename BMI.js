$(document). ready(
    function() {


        $("#calculateBMI").click(calculateBMI);



        var myRules =
            {
                pounds: {

                    required: true,
                    min: 88,
                    max: 353,
                },
                height: {

                    required: true,
                    min: 59,
                    max: 79,
                }

            };
        var myMessages =
            {
                pounds: {

                    required: "Please fill out",
                    min: "min:88",
                    max: "max: 353"
                },

                height: {

                    required: "Please fill out",
                    min: "min: 59",
                    max: "max: 79"
                }
            };

        $("form").validate({
            submitHandler: calculateBMI,
            rules: myRules,
            messages: myMessages
        });

        function calculateBMI()
        {

            // get all input from boxes and parse to number data type
            var weight = $("#pounds").val();



            var height = $("#height").val();

            var squareHeight = height * height;


            var BMI = (weight / squareHeight) * 703;



            if (BMI >= 18.5 && BMI <=25) {
                $("#Output2").text(`Normal`);

            }

            else if (BMI >= 16 && BMI <=18.5)
            {
                $("#Output2").text(`Underweight`);

            }


            else if (BMI >= 25 && BMI <=30)
            {
                $("#Output2").text(`Overweight`);

            }

            else if (BMI >= 30 && BMI <=35)
            {
                $("#Output2").text(`Obese`);

            }

            $("#Output").text(`Your current BMI is  ${BMI.toFixed(2)}`);


      }




    }
);