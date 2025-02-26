import { Avatar, Group, Text } from "@mantine/core";

export function CommentSimple() {
  return (
    <div className=" w-[70%] ">
      <Group>
        <Avatar
          className=""
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
          alt="Jacob Warnhalter"
          radius="xl"
        />
        <div>
          <Text size="md">Name jo bhi ho</Text>
          <Text size="xs" c="dimmed">
            10 minutes ago
          </Text>
        </div>
      </Group>
      <Text className="w-full  " pt="sm" size="md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores nobis quaerat earum, pariatur perferendis! Modi, esse fugiat nostrum a id quisquam odit totam voluptatum? Blanditiis assumenda debitis reiciendis odio.
      </Text>
    </div>
  );
}
