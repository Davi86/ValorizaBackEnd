import { getCustomRepository } from "typeorm"
import { TagsRepositories} from "../repositories/TagsRepositories"


class CreateTagService {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    //Verifica se o nome está preenchido
    if(!name) {
      throw new Error("Incorrect name!");
    }
    //SELECT * FROM TAGS WHERE NAME = 'name'
    //Se tiver preenchido segue o fluxo verificando se a tag já existe
    const tagAlreadyExists = await tagsRepositories.findOne({
      name,
    });
    //Verifica se a tag existe
    if(tagAlreadyExists) {
      throw new Error("Tag already exists!");
    }
    //Insere a nova tag no banco
    const tag = tagsRepositories.create({
      name,
    });

    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService }