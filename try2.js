const MAX_CHARS = 256;
function findSubString(str)
{
	let n = str.length;

	// if string is empty or having one char
	if (n <= 1)
		return str;

	// Count all distinct characters.
	let dist_count = 0;
	let visited = new Array(MAX_CHARS).fill(false);
	for (let i = 0; i < n; i++) {
		if (visited[str.charCodeAt(i)] == false) {
			visited[str.charCodeAt(i)] = true;
			dist_count++;
		}
	}

//	console.log(dist_count , visited)

	let start = 0, start_index = -1, min_len = Number.MAX_VALUE;
	let count = 0;


	let curr_count = new Array(MAX_CHARS).fill(0);


	for (let j = 0; j < n; j++) {

		curr_count[str.charCodeAt(j)]++;

		if (curr_count[str.charCodeAt(j)] == 1)
			count++;
// aabc bc   d  bca
		// if all the characters are matched
		console.log( count , dist_count , j)
		if (count == dist_count) {

			while (curr_count[str.charCodeAt(start)] > 1) {  // aab   bca  a=>1 , b=>1, s=3
				console.log(start)
				if (curr_count[str.charCodeAt(start)] > 1)
					curr_count[str.charCodeAt(start)]--;
				start++;
 
			} // 2

			// Update window size
			let len_window = j - start + 1;  // 6 , 5-3+1 => 3
			if (min_len > len_window) {
				min_len = len_window; // 3
				start_index = start; // 3
			}
		}
	}
	// kjnn

	return str.substring(start_index, min_len + start_index);
}

// Driver code
let str = "aabbca";
//document.write("Smallest window containing all distinct characters is: " +
let l =findSubString(str);

console.log(l)

// This code is contributed by shinjanpatra.
//</script>
