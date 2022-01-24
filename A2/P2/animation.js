let d_lst;
let num_slider
let d_speed
let d_size
let reset_dots
let d_sensor_len
let d_tail_len
let tail_len =4;
let animation= {

    setup(p) {
        p.fill(239, 247, 0)
        num_slider = p.createSlider(1, 2000, 20, 20);
        num_slider.position(10,10)
        d_speed = p.createSlider(0, 10, 1,.1);
        d_speed.position(10,30)
        d_size = p.createSlider(1, 25, 2,.0001);
        d_size.position(10,50)
        d_sensor_len = p.createSlider(2, 200, 5,1);
        d_sensor_len.position(10,70)
        d_respawn_set = p.createSlider(0, 3, 0,1);
        d_respawn_set.position(10,90)
        d_spawn_set = p.createSlider(0, 2, 0,1);
        d_spawn_set.position(10,110)
        d_tail_len = p.createSlider(0, 100, 1,1);
        d_tail_len.position(10,130)
        d_view = p.createSlider(-5, 1, 0,.001);
        d_view.position(10,150)
        reset_dots = p.createButton("Reset Balls")
        reset_dots.mousePressed(update_dots);
        reset_dots.position(500,10)

        p.pixelDensity(1)
        d_lst = new dots(p, 2000)
        console.log(d_lst)
        p.background(0,0,0)
        

    },
    draw(p) {
        // console.log(tail_len)
        p.background(0,0,0, tail_len);
        d_lst.draw(p)

        p.fill(255,255,255)
        p.rect(0,0,300,170)
        p.fill(0, 0, 0)
        p.text(`Number of Dots:${num_slider.value()}`, 160, 20)
        p.text(`Dot Speed:${Math.round(1000 *2**d_speed.value())/1000}`, 160, 40)
        p.text(`Dot Size:${Math.round(10 * d_size.value())/10}`, 160, 60)
        p.text(`Sensor Lenght:${d_sensor_len.value()}`, 160, 80)
        p.text(`Respawn Setting:${d_respawn_set.value()}`, 160, 100)
        p.text(`Spawn Setting:${d_spawn_set.value()}`, 160, 120)
        p.text(`Tail Length:${d_tail_len.value()}`, 160, 140)
        p.text(`View Range:${2**d_view.value()}`, 160, 160)

    }  
}
function update_dots(){
    // console.log("This")
    tail_len = 100 - d_tail_len.value()
    
    d_lst.respawn(
        
        num_slider.value(),
        d_speed.value(),
        d_size.value(),
        d_sensor_len.value(),
        d_respawn_set.value(),
        d_spawn_set.value(),
        2**d_view.value()


    )

}