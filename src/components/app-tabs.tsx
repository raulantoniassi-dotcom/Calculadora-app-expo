import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      labelStyle={{ selected: { color: colors.text } }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/home.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

  
      <NativeTabs.Trigger name="bhaskara"> 
        <NativeTabs.Trigger.Label>Bhaskara</NativeTabs.Trigger.Label> 
        <NativeTabs.Trigger.Icon src={{ uri: 'https://freepngimg.com/save/54461-calculator-png-image-high-quality/1024x1024' }} renderingMode="template" /> 
      </NativeTabs.Trigger> 

    
      <NativeTabs.Trigger name="calculadora"> 
        <NativeTabs.Trigger.Label>Calculadora</NativeTabs.Trigger.Label> 
 <NativeTabs.Trigger.Icon src={{ uri: 'https://freepngimg.com/save/54461-calculator-png-image-high-quality/1024x1024' }} renderingMode="template" />  
      </NativeTabs.Trigger> 

  
      <NativeTabs.Trigger name="pitagoras"> 
        <NativeTabs.Trigger.Label>Pitágoras</NativeTabs.Trigger.Label> 
 <NativeTabs.Trigger.Icon src={{ uri: 'https://freepngimg.com/save/54461-calculator-png-image-high-quality/1024x1024' }} renderingMode="template" /> 
      </NativeTabs.Trigger> 
    </NativeTabs> 
  ); 
}