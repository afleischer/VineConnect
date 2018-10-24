export class Container extends React.Component {
  render() {

  	const style = {
  		width: '30vw',
  		height: '30vh'
  	}
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
    	<div style = {style}>
        	<Map google={this.props.google} />
    	</div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: AIzaSyCZ8N-HmcBbHCcjv_pfa5KOWLGfXhNsZw8
})(Container)