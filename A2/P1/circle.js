class circ {
    constructor(x, y, x_v, y_v, rad, a_x, a_y, dens, c_f, c_v, c_a, q,cf) {
        a_x ??= 0
        a_y ??= 0
        dens ??= 0
        cf ??= .1
        this.x = x
        this.y = y
        this.v_x = x_v
        this.v_y = y_v
        this.width
        this.dim = rad;
        this.a_x = a_x
        this.a_y = a_y
        this.c_f = c_f || [40,40,40];
        this.c_v = c_v || [49, 255, 3];
        this.c_a = c_a || [3, 255, 234];
        this.q = q || 50
        this.mass = dens * rad ** 2
        this.touch = false;
        this.cf = cf

        
    }


    

    updatepos(p) {
        this.v_x += this.a_x
        this.v_y += this.a_y
        this.x += this.v_x
        this.y += this.v_y

        if (this.x >= p.width - this.dim) {
            // console.log("flipx right")
            this.v_x = -.1 * Math.random()
        }

        if (this.y >= p.height - 1.5 * this.dim) {
            this.v_y = -.1 * Math.random()
            // console.log("hit bot")
        }
        if (this.x <= 0 + .5 * this.dim) {
            this.v_x = .1 * Math.random()
            // console.log("hit left")
        }
        if (this.y <= .5 * this.dim) {
            this.v_y = .1 * Math.random()
            // console.log("hit top")
        }

        return [this.x, this.y, this.dim]
    }
    // updatepos(p) {
    //     this.v_x += this.a_x
    //     this.v_y += this.a_y
    //     this.x += this.v_x
    //     this.y += this.v_y

    //     if (this.x >= p.width - this.dim) {

    //         this.y = p.height/2
    //         this.x = p.width/2
    //         this.v_x *= .1;
    //     }

    //     if (this.y >= p.height - .5 * this.dim) {
    //         this.y = p.height/2
    //         this.x = p.width/2
    //         this.v_y *= .1;
    //         // console.log("hit bot")
    //     }
    //     if (this.x <= .5 * this.dim) {
    //         this.y = p.height/2
    //         this.x = p.width/2
    //         this.v_x *= .1;
    //         // console.log("hit left")
    //     }
    //     if (this.y <= .5 * this.dim) {
    //         this.y = p.height/2
    //         this.x = p.width/2
    //         this.v_y *= .1;
    //         // console.log("hit top")
    //     }

    //     return [this.x, this.y, this.dim]
    // }


    set_acc(a_x, a_y) {
        this.a_x = a_x;
        this.a_y = a_y;
    }

    draw_cir(p) {
        p.ellipse(this.x, this.y, this.dim, this.dim)
    }

    full_update(p) {

        this.updatepos(p)
        p.fill(this.c_f[0],this.c_f[1],this.c_f[2])
        this.draw_cir(p)
    
        p.stroke(this.c_v[0],this.c_v[1],this.c_v[2])
        this.draw_v(p)
        p.stroke(this.c_a[0],this.c_a[1],this.c_a[2])
        this.draw_a(p)
    }

    draw_v(p){
        
        let x_sqr = this.v_x * this.v_x 
        let y_sqr = this.v_y * this.v_y
        let mag = x_sqr + y_sqr


        let x_unit = x_sqr/mag * Math.sign(this.v_x)
        let y_unit = y_sqr/mag * Math.sign(this.v_y)
        

        
        p.line(this.x, this.y, this.x + x_unit * this.dim/2, this.y + y_unit* this.dim/2)
    }
    draw_a(p){
        
        let x_sqr = this.a_x * this.a_x
        let y_sqr = this.a_y * this.a_y
        let mag = x_sqr + y_sqr


        let x_unit = x_sqr/mag * Math.sign(this.a_x)
        let y_unit = y_sqr/mag * Math.sign(this.a_y)
        p.line(this.x, this.y, this.x + x_unit * this.dim/2, this.y + y_unit* this.dim/2)
    }
    circle_acc(p){
        // console.log(this.cf)

        this.a_x += -this.cf *(this.x - p.width/2)/p.width
        this.a_y += -this.cf *(this.y - p.height/2)/p.height


    }


}