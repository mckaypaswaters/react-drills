import React, { Component } from "react";
import "./App.css";
import Image from './Image'

class App extends Component {
  constructor(){
    super()
    this.state = {
      imgUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9fb0e132-4e14-4b4c-8fc3-7c6fe7db635a/dcg8r17-21125f93-f63e-4235-adbd-af2ae78af624.jpg/v1/fill/w_1024,h_576,q_75,strp/super_smash_bros_ultimate_lucina_wallpaper_by_leadingdemon0_dcg8r17-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvOWZiMGUxMzItNGUxNC00YjRjLThmYzMtN2M2ZmU3ZGI2MzVhXC9kY2c4cjE3LTIxMTI1ZjkzLWY2M2UtNDIzNS1hZGJkLWFmMmFlNzhhZjYyNC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Qi0WdZTQT3CYvcZXRHR8WdzeKh1hQ5aqZVm5FY1W0AU'
    }
  }

  render() {
    return (
      <div className="App">
        <Image
        imgUrl = {this.state.imgUrl}
        />
      </div>
    );
  }
}

export default App;
