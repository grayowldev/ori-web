import {Progress} from "@/components/ui/progress";

export default function OriProgress(props: any) {
    return (
        <div className={'w-max border-solid border-2 rounded-lg p-10'}>
            <div className={'flex'}>
                <h3 className={'pr-2'}>Total Order Weight:</h3>
                <h4>{props.weight != null ? '' + props.weight : 'No purchase order selected'}</h4>
            </div>
            <div className={'pt-2'}>
                Current Sum: {props.sum}
                <Progress value={props.progressPercentage}></Progress>
            </div>

        </div>
    )
}