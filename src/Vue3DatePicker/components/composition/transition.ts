import { computed, ComputedRef, inject } from 'vue';
import { ITransition } from '../../interfaces';

export interface IUseTransitions {
    transitionName: ComputedRef<(isOpen: boolean) => string>;
    showTransition: boolean;
}

export const useTransitions = (): IUseTransitions => {
    const transitions = inject<ComputedRef<ITransition>>('transitions');

    const transitionName = computed(() => (isOpen: boolean): string => {
        if (transitions?.value) {
            return isOpen ? transitions.value.open : transitions.value.close;
        }
        return '';
    });

    return { transitionName, showTransition: !!transitions?.value };
};
