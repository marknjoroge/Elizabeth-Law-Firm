import './TitleStyles.css';

export function OverThenUnder(props) {
    return (
        <div class="twelve">
            <h1>{props.name}</h1>
        </div>
    )
}

export function TwoAlt(props) {
    return (
        <div class="two alt-two">
            <h1>
                <span>{props.alt}</span>
                {props.title}
            </h1>
        </div>
    )
}

export function Two() {
    return (
        <div class="two">
            <h1>Style Two
                <span>Example Tagline Text</span>
            </h1>
        </div>
    )
}

export function Five(props) {
    return (
        <div class="five">
            <h1>{props.heading}
                <span>{props.tagline}</span>
            </h1>
        </div>
    )
}