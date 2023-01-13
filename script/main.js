module.exports = () => {
  const game = g.game;
  const scene = new g.Scene({
    game,
    assetPaths: [],
  });

  game.pushScene(scene);
};
