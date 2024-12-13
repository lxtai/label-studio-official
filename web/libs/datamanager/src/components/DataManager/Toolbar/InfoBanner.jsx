import { inject } from "mobx-react";
import { Block, Elem } from "../../../utils/bem";
import "./InfoBanner.scss";

const injector = inject(({ store }) => {
    console.log('store', store);
    return {};
});

export const InfoBanner = injector(({}) => {
    return (
        <Block name="info-banner">
            <Elem name="content">
                <Elem name="link">
                    Looking for automatic labeling? Try it now ->
                </Elem>
            </Elem>
        </Block>
    );
});