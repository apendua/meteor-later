Package.describe({
  summary: "Define schedules and calculate future or previous schedule occurrences.",
});

Package.on_use(function (api) {
  api.add_files([
    'later/later.js',
  ], ['client', 'server']);

  if (api.export !== undefined) {
    api.export('later');
  }
});
