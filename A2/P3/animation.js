let time = Date.now();
let cur_time = 0;

let animation= {

    setup(p) {
        p.background(0,0,0)
        p.fill(Math.random(),Math.random(),Math.random)
        p.triangle(p.width, p.height, 0, p.height, 0, 0)
        

    },
    draw(p) {
        console.log("here")
        cur_time = (time - Date.now())/1000
        // console.log(cur_time/1000)
        p.fill(255 * Math.sin(cur_time),Math.cos(cur_time) * 255,255 * Math.tan(cur_time))
        p.triangle(p.width, p.height, 0, p.height, 0, 0)
        p.fill(255 * Math.cos(cur_time),Math.sin(cur_time) * 255,255 * Math.sin(cur_time) * Math.cos(cur_time))
        p.triangle(p.width, p.height, p.width, 0, 0, 0)


    }  
}
