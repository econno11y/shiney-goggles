import app from "./app.js";

const port = process.env.PORT || 8000;

app.listen(port, function onStart(err) {
	if (err) {
		console.log(err);
	}
	console.info(`Server started on port ${port}`);
});

export default app;
