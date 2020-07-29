import axios from 'axios';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency

  console.log(values);


axios.post("http://localhost:1234/emp/register", values)
.then(response => {
  console.log(response)
  window.alert(`Employee inforamation successfully added to Database `);

})
.catch(error => {
  console.log(error)
})

});