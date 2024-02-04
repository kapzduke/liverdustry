Attribute.add("apple");
Attribute.add("banana");
Attribute.add("grapes");
Attribute.add("silicon");
Events.on(ContentInitEvent, e => {
  Vars.content.block("liverdustry-apple-fruit").attributes.set(Attribute.get("apple"), 1);
  Vars.content.block("liverdustry-banana-fruit").attributes.set(Attribute.get("banana"), 1);
  Vars.content.block("liverdustry-silicon-fruit").attributes.set(Attribute.get("silicon"), 1);
});
