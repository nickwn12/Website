
class circles{
    constructor(num, dim, q, q_r,cf){

        this.num = num || 20
        this.dim = dim || 10
        this.q = q || .2
        this.q_r = q_r|| 0
        this.cf = cf ??= .01
        this.new_circs()

        
        
        
    }

    new_circs(){
        let c_lst=[]
        for(let i = 0; i< this.num; i++){

            c_lst.push(new circ(
                Math.random() * 500,
                Math.random() * 500,
                (Math.random()-.5) * 0,
                (Math.random()-.5) * 0,
                Math.random() * this.dim,
                0,
                0,
                // (Math.random()-.5)/25,
                (Math.random()- this.q_r) * this.q,
                [Math.random() * 260,Math.random() * 260,Math.random() * 260],
                [Math.random() * 260,Math.random() * 260,Math.random() * 260],
                [Math.random() * 260,Math.random() * 260,Math.random() * 260],
                this.cf * Math.random(),
                this.cf * Math.random()
                
                
                )
             )
        
        
        }
        this.circs = c_lst


    }

    apply_q(p){
        let cur_circs = JSON.parse(JSON.stringify(this.circs))
        
        for(let c in this.circs){
                 
                this.circs[c].a_x = 0
                this.circs[c].a_y = 0
            }

        for(let v in this.circs){
            
            // console.log(cur_circs.length)
            // console.log(cur_circs)
            var cur_circ = cur_circs[v]
            
            


            
            for(let c in this.circs){
                
                let x_dist = Math.abs(cur_circ.x - this.circs[c].x)
                let y_dist = Math.abs(cur_circ.y - this.circs[c].y)

                let r = x_dist + y_dist
                if(r <= 1){continue}
                let force_sign= 1;
                if(r < cur_circ.dim + this.circs[c].dim){
                    force_sign = -.1;
                    // if(this.circs[c].touch = true || this.circs[v]){continue}
                    // this.circs[c].v_x *= -.1;
                    // this.circs[c].v_y *= -.1;
                    
                    // this.circs[c].a_x = 0
                    // this.circs[c].a_y = 0

                    // this.circs[c].touch = true
                    // continue
                }
                this.circs[c].touch = false;
                let x_sqr = x_dist * x_dist 
                let y_sqr = y_dist * y_dist
                let mag = x_sqr + y_sqr


                let x_unit = x_sqr/mag * Math.sign(cur_circ.x - this.circs[c].x)
                let y_unit = y_sqr/mag * Math.sign(cur_circ.y - this.circs[c].y)

                let force = (cur_circ.mass * this.circs[c].mass)/(r * r) * force_sign
                this.circs[c].a_x += x_unit * force
                this.circs[c].a_y += y_unit * force


            }}




    }

    circles_update(p){
        this.apply_q(p)
        for(let c in this.circs){
            this.circs[c].circle_acc(p)
            this.circs[c].full_update(p)
           
            
            
        }
    }
}