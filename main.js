const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x000000,
});

document.body.appendChild(app.view);

const loader = PIXI.Loader.shared;
const resources = loader.resources;
const TextureCache = PIXI.utils.TextureCache;
const Sprite = PIXI.Sprite;

loader.add("images/maze.png").load(setup);

let maze, mazeContainer, filter;

function setup() {
    maze = new Sprite(resources["images/maze.png"].texture);
    maze.width = app.screen.width;
    maze.height = app.screen.height;

    mazeContainer = new PIXI.Container();
    mazeContainer.addChild(maze);

    app.stage.addChild(mazeContainer);

    filter = new PIXI.filters.VoidFilter();
    filter.padding = 20;

    mazeContainer.filters = [filter];

    app.ticker.add(() => {
        filter.uniforms.offset = [window.innerWidth / 2, window.innerHeight / 2];
    });
}

const title = document.querySelector("#title");
const button = document.querySelector("#start-button");

title.style.opacity = 0;
button.style.opacity = 0;

window.addEventListener("load", () => {
    title.style.transition = "opacity 1s";
    button.style.transition = "opacity 1s";
    title.style.opacity = 1;
    button.style.opacity = 1;
});

const container = document.querySelector("#container");

container.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    filter.uniforms.lightPosition = [x, y];
});
