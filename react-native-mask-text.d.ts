declare module 'react-native-masked-text' {
    import { TextInputProps } from 'react-native';

    export interface TextInputMaskProps extends TextInputProps {
        type: string;
        options?: any;
        value: string;
        onChangeText: (text: string) => void;
    }

    export class TextInputMask extends React.Component<TextInputMaskProps> { }
}
