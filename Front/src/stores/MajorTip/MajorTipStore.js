import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import MajorTipRepository from './MajorTipRepository';

@autobind
class MajorTipStore {
  @observable iswriteModal = false;
  @observable tipList = [];
  @action
  async handleMajorTip() {
    const response = await MajorTipRepository.Major();
    this.tipList = response.data.list;
    return response;
  }

  @action
  writeTipModal() {
    this.iswriteModal = !this.iswriteModal;
  }

  @action
  async handleMakeMajorTip(request) {
    const response = await MajorTipRepository.makeMajorTip(request);

    return response;
  }
}

export default MajorTipStore;
