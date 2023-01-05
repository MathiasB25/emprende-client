// React
import { useEffect } from 'react';
// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../../../../redux/actions';
// Components
import { HeadingH2, Description, Button } from '../elements';
// Hooks
import randomId from '../../../../hooks/randomId';

function RichTextSection({state, actions, elements}) {

    return(
        <div className='flex flex-col gap-7 items-center page-width'>
            {elements.map(e => {
                switch (e.component) {
                    case "HeadingH2":
                        useEffect(() => {
                            if(e.value.text === '' && !e.modified) {
                                actions.updateStoreSection({ section: { component: "RichText" }, element: e, value: { text: "Talk about your brand" } });
                            }
                        }, [])

                        return <HeadingH2 key={randomId()} text={e.value.text} />
                    case "Description":
                        useEffect(() => {
                            if(e.value.text === '' && !e.modified) {
                                actions.updateStoreSection({ section: { component: "RichText" }, element: e, value: { text: "Share information about your brand with your customers. Describe a product, make announcements, or welcome customers to your store." } });
                            }
                        }, [])

                        return <Description key={randomId()} maxWidth={"45rem"} text={e.value.text} />
                    case "Button":
                        return <Button key={randomId()} text={e.value.text} />
                }
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({
	state: state
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(Actions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RichTextSection);