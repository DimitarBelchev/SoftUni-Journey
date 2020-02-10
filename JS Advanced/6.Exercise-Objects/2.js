function solve(input){

    let html = `<table>\n`;



    for(let line of input){

        let obj = JSON.parse(line);



        html+= `     <tr>\n`;

        html+= `        <td>${escapeHtml(obj.name)}</td>\n`;

        html+= `        <td>${escapeHtml(obj.position)}</td>\n`;

        html+= `        <td>${obj.salary}</td>\n`;



        html+= `     </tr>\n`

    }

    html += `</table>`;



    console.log(html);



    function escapeHtml(text) {

        let map = { '"': '&quot;', '&': '&amp;',

        "'": '&#39;', '<': '&lt;', '>': '&gt;' };

    return text.replace(/[\"&'<>]/g, ch => map[ch]);

     }

}