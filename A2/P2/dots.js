

class dots {
    constructor(p, num) {
        let dots_lst = []


        p.loadPixels()
        for (let i = 0; i < num; i++) {
            dots_lst.push(
                new dot(p)
            )

        }
        this.p = p
        this.ds = dots_lst
    }
    respawn(num, speed, size, sl, resp, spwn, view) {
        this.p.loadPixels()
        this.p.background(0, 0, 0)
        this.ds = []
        let dots_lst = []
        for (let i = 0; i < num; i++) {
            let x__;
            let y__;
            if(spwn == 0){
                x__ = Math.random() * this.p.width;
                y__ = Math.random() * this.p.height
            }
            if(spwn == 1){
                x__ = this.p.width/2;
                y__ = this.p.height/2;
            }
            console.log(spwn)
            if(spwn == 2){
                console.log("here")
                x__ = this.p.width-2
                y__ = this.p.height-2
            }


            dots_lst.push(
                

                new dot(
                    this.p, 
                    x__,
                    y__,
                    [Math.random() * 255, Math.random() * 255, Math.random() * 255],
                    (Math.random() - .5) * 2,
                    (Math.random() - .5) * 2,
                    size,
                    sl,
                    speed,
                    resp,
                    view





                )
            )
            this.ds = dots_lst

        }



    }

    draw(p) {
        p.loadPixels()
        for (let d in this.ds) {

            this.ds[d].update(p)
            this.ds[d].draw(p)

            this.ds[d].draw_eyes(p)
        }
    }





}