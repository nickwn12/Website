


document.addEventListener("keyup", () => pause = !pause);
let slider;
let chart_animation = {
    setup(p) {

        slider = p.createSlider(0, 255, 100);
        slider.position(p.width + 50, 10);
        p.fill(244, 252, 3)
        p.textSize(24)
        p.text('word', 10, 10);
        slider.style('width', '80px');
    },
    draw(p, circs) {
        const cs = circs.circs
        p.background(0, 0, 0, 100)
        p.text(String(slider.value()), 10, 30);
        for(let c in cs){
            
            let circ = cs[c]

            p.fill(circ.c_f[0],circ.c_f[1],circ.c_f[2])
            
            p.ellipse(circ.mass * (p.width/(circs.dim * circs.dim * circs.q)),  p.height-(slider.value() * (circ.v_y * circ.v_y + circ.v_x * circ.v_x)),10, 10)
        }
        
        

    }
}