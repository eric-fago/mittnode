import React from 'react';

// TODO: Hoc (with BlurInput)...
class BlurTextArea extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: props.value
		};
	}

	componentDidUpdate(prevProps) {
		const { id: prevId } = prevProps;
		const { id: currId, value } = this.props;

		if (prevId === currId)
			return;

		this.setState({ value });
	}

	handleChange = (value) => {
		this.setState({ value });
	};

	handleUpdate = () => {
		const { onChange } = this.props;
		onChange(this.state.value);
	};

	render() {
		return (
			<textarea
				{...this.props}
				onChange={(e) => this.handleChange(e.target.value)}
				onBlur={() => this.handleUpdate()}
				value={this.state.value}
			/>
		);
	}
}

export default BlurTextArea;
