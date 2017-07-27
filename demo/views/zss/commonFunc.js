export const getTrs2 = (trs) => {
	let returnTrs = [];
	trs.map(function(v, k) {
		returnTrs.push(<tr key={k}>
           {
           	v.map(function(sv, sk) {
           		return <td key={sk}>{sv}</td>
           	})
           }
				</tr>);
	});
	return returnTrs;
}

export const formatNum = (num) => {
	return num < 10 ? 0 + num.toString() : num;
}