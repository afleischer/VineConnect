import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: ''
        };
        this.inputRef = React.createRef();
    }

    handleChange = address => {
        this.setState({ address });
        if(!address){
            this.props.handleAutoselect(false)
        }
    };

    handleSelect = address => {

        this.setState({address: address})

        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.props.updateLatLng(latLng))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));

        //input the value into the input field

        //this.setState({ address });
        this.props.handleAutoselect(true)
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            value={this.state.address.value}
                            {...getInputProps({
                                placeholder: 'Enter a location',
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

export default LocationSearchInput;