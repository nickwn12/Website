class dot {
    constructor(p, x, y, c, v_x, v_y, l, dist, speed, resp,view) {
        this.p = p
        this.view = view || 1

        this.x = x || Math.random() * p.width
        this.y = y || Math.random() * p.height
        this.sp = speed || 1
        let rgb = [[0, 255, 0], [255, 0, 0], [0, 0, 255]]
        // this.x = x || 100
        // this.y = y || 100
        this.c = c || [Math.random() * 255, Math.random() * 255, Math.random() * 255]
        // this.c = c || rgb[Math.floor(Math.random() * 3)]
        this.v_x = v_x || (Math.random() - .5) * 2
        this.v_y = v_y || (Math.random() - .5) * 2
        this.l = l || 1
        this.dist = dist || 15
        this.resp = resp || 0
        this.min = Math.abs(255 - this.c[0]) ** 2 + Math.abs(255 - this.c[1]) ** 2 + Math.abs(255 - this.c[2]) ** 2

    }

    draw(p) {
        p.noStroke()
        p.fill(this.c[0], this.c[1], this.c[2])
        p.square(this.x, this.y, this.l)
    }

    draw_eyes(p) {
        p.fill(244, 255, 33)
        let pd = 1


        let ang = Math.atan2(this.v_y, this.v_x)
        let y_ = Math.sin(ang)
        let x_ = Math.cos(ang)
        // p.stroke(255,255,255)
        // p.line(this.x,this.y, this.x + x_ * 10, this.y + y_ * 10)
        let off;
        let p_r;
        let p_b;
        let p_g;
        let min_ang = ang - Math.PI / 4

        let min = -1
        let t_ang = ang
        let dist = this.dist
        let mul = 1
        if(this.view > 1){
            mul = this.view
        }

        for (let min_ang = ang - Math.PI * this.view / 4; min_ang <= ang + Math.PI * this.view / 4; min_ang += .01 * mul) {

            // console.log(p.pixelDensity())
            // console.log(p.pixels[0])
            let y_ = Math.sin(min_ang)
            let x_ = Math.cos(min_ang)
            off = ((Math.round(this.y + y_ * dist) * p.width * pd) + Math.round(this.x + x_ * dist)) * 4
            // console.log(off)
            // console.log(p.pixels[off])
            let sum
            if (p.pixels[off] < 10 && p.pixels[off + 1] < 10 && p.pixels[off + 2] < 10) {
                sum = 1
            } else {
                // let p_r = Math.abs(p.pixels[off] - this.c[0]) * Math.abs(p.pixels[off] - this.c[0]) * Math.abs(p.pixels[off] - this.c[0]) 
                // let p_b = Math.abs(p.pixels[off + 1] - this.c[1]) * Math.abs(p.pixels[off + 1] - this.c[1]) * Math.abs(p.pixels[off + 1] - this.c[1]) 
                // let p_g = Math.abs(p.pixels[off + 2] - this.c[2]) * Math.abs(p.pixels[off + 2] - this.c[2]) * Math.abs(p.pixels[off + 2] - this.c[2])
                let p_r = Math.pow(Math.abs(p.pixels[off] - this.c[0]), 10)
                let p_b = Math.pow(Math.abs(p.pixels[off + 1] - this.c[1]), 10)
                let p_g = Math.abs(Math.abs(p.pixels[off + 2] - this.c[2]), 10)
                sum = p_r + p_b + p_g

            }

            if (min < 0) {
                min = sum
            }

            if (sum < min) {
                min = sum
                t_ang = min_ang

            }










            // console.log("hi")
            // console.log(p.pixels[(this.x + x_) * pd + (this.y + y_) * pd * p.width])



            // p.line(this.x,this.y, this.x + x_ * 10, this.y + y_ * 10)
        }
        this.v_y = Math.sin(t_ang)
        this.v_x = Math.cos(t_ang)







    }
    update(p) {

        if (this.resp == 0) {
            if (this.x <= 0 || this.x >= p.width) {
                this.v_x *= -1;
                this.x = p.width / 2
                this.y = p.height / 2

            }
            if (this.y <= 0 || this.y >= p.height) {
                this.v_y *= -1;
                this.x = p.width / 2
                this.y = p.height / 2

            }
            this.x += this.v_x * this.sp;
            this.y += this.v_y * this.sp;


        }
        if (this.resp == 1) {
            this.x += this.v_x * this.sp;
            this.y += this.v_y * this.sp;

            if (this.x <= 0) {
                // this.v_x *= -1;
                this.x = p.width - 2
                // this.y = p.height

            }
            if (this.x >= p.width) {
                // this.v_x *= -1;
                this.x = 0 + 2
                // this.y = 0

            }
            if (this.y <= 0) {
                // this.v_y *= -1;
                // this.x = p.width

                // console.log(p.height)
                this.y = p.height - 2
            }
            if (this.y >= p.height) {
                // this.v_y *= -1;
                // this.x = 0
                this.y = 0 + 2
            }



        }
        if (this.resp == 2) {
            if (this.x <= 0 || this.x >= p.width) {
                this.v_x *= -1;
                this.x = p.width * Math.random()
                this.y = p.height * Math.random()

            }
            if (this.y <= 0 || this.y >= p.height) {
                this.v_y *= -1;
                this.x = p.width * Math.random()
                this.y = p.height * Math.random()
            }

            this.x += this.v_x * this.sp;
            this.y += this.v_y * this.sp;
        }

        if (this.resp == 3) {

            this.x += this.v_x * this.sp;
            this.y += this.v_y * this.sp;

            if (this.x <= 0) {
                // this.v_x *= -1;
                this.x = p.width * .75
                this.y = p.height/2
                // this.y = p.height

            }
            if (this.x >= p.width) {
                // this.v_x *= -1;
                this.x = p.width * .25;
                this.y = p.height/2
                // this.y = 0

            }
            if (this.y <= 0) {
                // this.v_y *= -1;
                // this.x = p.width

                // console.log(p.height)
                this.x = p.width/2
                this.y = p.height * .75
            }
            if (this.y >= p.height) {
                // this.v_y *= -1;
                this.x = p.width/2
                this.y = p.height * .25
            }
        }
    }
}