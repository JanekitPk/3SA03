import CharacterCard from './CharacterCard';
function App() {
 return (
 <div className="App">
 <div>
 <CharacterCard value="h"/>
 <CharacterCard value="i"/>
 </div>
 <p>
 Hello {"World"}
 </p>
 </div>
 );
}
const word = "Hello";
function App() {
 return (
 <div>
 {
 Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
 }
 </div>
 );
}