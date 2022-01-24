let canvasHolder = document.getElementById("main")
let size = 400
let circs = []
// Create a P5 app




mainP5 = new p5(


    // Run after processing is initialized
    function (p) {
        p.p



        // console.log(p)
        // Set the size of the canvas that P5 thinks its using
        // Use HSL mode (WAAAYYY better than RGB!)


        p.setup = () => {
            p.createCanvas(size, size);
   

            if (animation.setup)
                animation.setup(p)
        }
        p.draw = () => {
            animation.draw(p)
            
     
            
            

        }
    }, canvasHolder)
