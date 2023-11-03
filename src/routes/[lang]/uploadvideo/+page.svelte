<script lang="ts">
let urlToVideo = "";
async function uploadVideo(file) {
	console.log("uploadVideo")
	console.log(file)
	const blob = new Blob([file], { type: file.type });
	const url = URL.createObjectURL(blob);
	console.log(url)

  // Use the URL to display the video in a player
  urlToVideo = url;
}

</script>

<div>
	<h1>Upload</h1>
	<input type="file" accept="video/*" on:change="{(event) => uploadVideo(event.target.files[0])}" />
</div>
<div>
	<video src="{urlToVideo}" controls></video>
</div>
