
import config from '../../../nav.config.json'
import { Component, ChangeDetectionStrategy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { settings } from 'src/store'

@Component({
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-git',
  templateUrl: './icon-git.component.html',
  styleUrls: ['./icon-git.component.scss'],
})
export class IconGitComponent {
  gitRepoUrl: string = config.gitRepoUrl.includes('github.com/xjh22222228')
    ? 'https://github.com/xjh22222228/nav'
    : config.gitRepoUrl
  showGithub = settings.showGithub

  constructor() {}
}
