import { Check } from "phosphor-react";

export function NewHabitForm() {
    return(
        <form>
            <label htmlFor="title">
                Qual seu compormetimento?
            </label>

            <input 
                type="text"
                id="title"
                placeholder="ex: Exercicios, beber 2l de água, etc..."
                autoFocus
            />

            <label htmlFor="">
                Qual a recorrencia?
            </label>

            <button type="submit">
                <Check size={20} weight="bold"/>
                Confirmar
            </button>
        </form>
    )
}