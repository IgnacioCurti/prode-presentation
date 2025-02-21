import React, { useContext, useMemo } from "react";
import { Slice, BooleanField, TitleField, ImageField } from "@prismicio/types";
import { NavigationContext } from "@app/contexts/navigation";
import { GlobalDataContext } from "@app/contexts/global-data";
import IntroductionSlide from "./IntroductionSlide";
import AgendaSlide from "./AgendaSlide";
import ChapterIntroSlide from "./ChapterIntroSlide";
import TextSlide from "./TextSlide";
import TextAndImageSlide from "./TextAndImageSlide";
import CenteredTextSlide from "./CenteredTextSlide";
import TeamSlide from "./TeamSlide";
import ElementsSlide from "./ElementsSlide";
import ElementsAltSlide from "./ElementsAltSlide";
import QuoteSlide from "./QuoteSlide";
import KeyFiguresSlide from "./KeyFiguresSlide";
import ChartSlide from "./ChartSlide";
import ErrorSlide from "./ErrorSlide";
import BaseSlide from "../Shared/BaseSlide";
import FigmaSlide from "./FigmaSlide";
import ImageSlide from "./ImageSlide";
import styles from "./BaseSlide.module.scss";

export interface ISlide {
    dark_theme_enabled: BooleanField;
    chapter_name: TitleField<"filled">;
    slide_navigation_id: TitleField<"filled">;
    slide_bg_pattern?: ImageField;
}

interface ComponentMap {
    [key: string]: JSX.Element;
}

/**
 * Sets the current slide based on its type
 */
function setCurrentSlide(slice: Slice): JSX.Element {
    if (!slice) return <ErrorSlide />;

    const { slice_type, primary, items } = slice;
    const content = primary as any;
    const componentMap: ComponentMap = Object.freeze({
        title_slide: <IntroductionSlide content={content} />,
        agenda_slide: <AgendaSlide content={content} />,
        chapter_intro_slide: <ChapterIntroSlide content={content} />,
        text_slide: <TextSlide content={{ ...content, text_blocks: items }} />,
        text_and_image_slide: <TextAndImageSlide content={content} />,
        centered_text_slide: <CenteredTextSlide content={content} />,
        team_slide: <TeamSlide content={{ ...content, team: items }} />,
        elements_slide: <ElementsSlide content={{ ...content, elements: items }} />,
        elements_alt_slide: <ElementsAltSlide content={{ ...content, elements: items }} />,
        quote_slide: <QuoteSlide content={content} />,
        key_figures_slide: <KeyFiguresSlide content={{ ...content, key_figures: items }} />,
        chart_slide: <ChartSlide content={{ ...content, chart_items: items }} />,
        figma_slide: <FigmaSlide content={content} />,
        image_slide: <ImageSlide content={content} />
    });

    return componentMap[slice_type] ?? <ErrorSlide />;
}

/**
 * The main slide component
 */
export default function Slide(): JSX.Element {
    const { currentIndex } = useContext(NavigationContext);
    const { body } = useContext(GlobalDataContext);
    const slide = useMemo(() => body[currentIndex], [body, currentIndex]);
    const styleOverride = useMemo(() => {
        const { chapter_name, slide_class_name_override } = slide.primary;

        return (
            (slide_class_name_override as any) ??
            (chapter_name as any)?.[0].text.split(" ").join("_").toLowerCase()
        );
    }, [slide]);

    return (
        <BaseSlide key={`slide_${currentIndex}`} className={styles[styleOverride]}>
            {setCurrentSlide(slide)}
        </BaseSlide>
    );
}
