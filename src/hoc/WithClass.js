import React from 'react';

const withClass = (WrappedComponent, className) => {
	//<div className={props.classes}>{props.children}</div>;

	//functio returning component but not component itself
	return (props) => (
		<div className={className}>
			<WrappedComponent />
		</div>
	);
};

export default withClass;
