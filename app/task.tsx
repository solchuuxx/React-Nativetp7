import React, { useState } from "react";
import { Input, IconButton, Checkbox, Text, Box, VStack, HStack, Heading, Icon, Center, useToast, NativeBaseProvider } from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";
import { ScrollView, Text as RNText, View, StyleSheet} from "react-native";

const Example = () => {
  const instState = [{
    title: "Code",
    isCompleted: true
  }, {
    title: "Meeting with team at 9",
    isCompleted: false
  }, {
    title: "Check Emails",
    isCompleted: false
  }, {
    title: "Write an article",
    isCompleted: false
  }];
  const [list, setList] = useState(instState);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const toast = useToast();

  const addItem = (title:string) => {
    if (title === "") {
      toast.show({
        title: "Please Enter Text",
        variant: "warning"
      });
      return;
    }

    if (editIndex !== null) {
      setList(prevList => {
        const newList = [...prevList];
        newList[editIndex].title = title;
        return newList;
      });
      setEditIndex(null);
    } else {
      setList(prevList => {
        return [...prevList, {
          title: title,
          isCompleted: false
        }];
      });
    }
    setInputValue("");
  };

  const handleDelete = (index: number) => {
    setList(prevList => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };

  const handleStatusChange = (index: number) => {
    setList(prevList => {
      const newList = [...prevList];
      newList[index].isCompleted = !newList[index].isCompleted;
      return newList;
    });
  };

  const handleEdit = (index: number) => {
    setInputValue(list[index].title);
    setEditIndex(index);
  };

  return (
    <Center w="100%" {...styles.container}>
      <Box maxW="300" w="100%">
        <Heading mb="2" size="md">
          Wednesday
        </Heading>
        <VStack space={4}>
          <HStack space={2}>
            <Input flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Add Task" />
            <IconButton borderRadius="sm" variant="solid" icon={<Icon as={Feather} name="plus" size="sm" color="warmGray.50" />} onPress={() => addItem(inputValue)} />
          </HStack>
          <VStack space={2}>
            {list.map((item, itemI) => (
              <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.title + itemI.toString()}>
                <Checkbox aria-label="" isChecked={item.isCompleted} onChange={() => handleStatusChange(itemI)} value={item.title}></Checkbox>
                <Text width="100%" flexShrink={1} textAlign="left" mx="2" strikeThrough={item.isCompleted} _light={{
                  color: item.isCompleted ? "gray.400" : "coolGray.800"
                }} _dark={{
                  color: item.isCompleted ? "gray.400" : "coolGray.50"
                }} onPress={() => handleStatusChange(itemI)}>
                  {item.title}
                </Text>
                <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="edit" size="xs" color="trueGray.400" />} onPress={() => handleEdit(itemI)} />
                <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />} onPress={() => handleDelete(itemI)} />
              </HStack>
            ))}
          </VStack>
        </VStack>
      </Box>

      <ScrollView style={styles.content}>
      </ScrollView>
      <View style={styles.footer}>
        <RNText style={styles.footerText}>Contenido para el footer</RNText>
      </View>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  },
  content: {
    flex: 1,
  },
  footer: {
    width: '100%',
    backgroundColor: '#84B5F3',
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    padding: 20,
  },
  footerText: {
    color: '#000000',
  },
})

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};