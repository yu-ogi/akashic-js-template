module.exports = () => {
  const scene = new g.Scene({
    game: g.game,
    assetPaths: [],
  });

  g.game.pushScene(scene);
};
