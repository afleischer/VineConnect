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
  apiKey: AIzaSyDFDbA-j3YPpdACF2hWBzDC4l9abeP-Z1k
})(Container)