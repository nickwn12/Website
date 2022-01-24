let c1 = new circ(20, 20, 5, 5, 50, 0.2, 0.2);
let c2 = new circ(200, 90, 5, 5, 30, 0.2, 0.2, 1, [255, 3, 41]);
let c3 = new circ(200, 200, 5, 5, 10, 0.2, 0.2, 1, [110, 110, 110]);
let c_lst = [];

let cs = new circles((num = 500), 0.5, 25, 0.5);
document.addEventListener("keyup", () => (pause = !pause));

let num_slider;
let q_slider;
let dim_slider;
let reset_balls;
let cf_slider;
let animation = {
  setup(p) {
    p.fill(239, 247, 0);
    num_slider = p.createSlider(1, 1000, 20, 1);
    num_slider.position(10, 10);
    q_slider = p.createSlider(-10, 10, 0.5, 0.0001);
    q_slider.position(10, 30);
    dim_slider = p.createSlider(0.1, 25, 10, 0.0001);
    dim_slider.position(10, 50);
    cf_slider = p.createSlider(0, 10, 0, 0.0001);
    cf_slider.position(10, 70);
    reset_balls = p.createButton("Reset Balls");
    reset_balls.mousePressed(reset_circles);
  },
  draw(p) {
    p.background(0, 0, 0, 50);

    p.text(`Number of Balls:${num_slider.value()}`, 160, 20);
    p.text(
      `Charge Density:${Math.round(1000 * 2 ** q_slider.value()) / 1000}`,
      160,
      40
    );
    p.text(`Ball Size:${Math.round(10 * dim_slider.value()) / 10}`, 160, 60);
    p.text(`Restoring Force:${cf_slider.value()}`, 160, 80);

    cs.circles_update(p);
    return cs;
  },
};
function reset_circles() {
  cs.num = num_slider.value();
  cs.dim = dim_slider.value();
  cs.q = 2 ** q_slider.value();
  cs.cf = cf_slider.value();
  cs.new_circs();
}
