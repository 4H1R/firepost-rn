import { SuccessToast, ToastConfig, ErrorToast } from 'react-native-toast-message';
import tw from './tailwind';

const sharedProps = { text1Style: tw`font-primary font-normal text-sm`, text1NumberOfLines: 5 };

const toastConfig: ToastConfig = {
  success: (props: any) => <SuccessToast {...props} {...sharedProps} />,
  error: (props: any) => <ErrorToast {...props} {...sharedProps} />,
};

export default toastConfig;
